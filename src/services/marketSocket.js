let socket = null;

export const connectMarketSocket = (
  onCandleUpdate
) => {

  socket =
    new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@kline_1m"
    );

  socket.onopen = () => {

    console.log(
      "Binance Candle Socket Connected"
    );
  };

  socket.onmessage = (
    event
  ) => {

    const message =
      JSON.parse(
        event.data
      );

    const candle =
      message.k;

    onCandleUpdate({

      time:
        candle.t / 1000,

      open:
        parseFloat(candle.o),

      high:
        parseFloat(candle.h),

      low:
        parseFloat(candle.l),

      close:
        parseFloat(candle.c),
    });
  };

  socket.onerror = (
    error
  ) => {

    console.log(
      "WebSocket Error",
      error
    );
  };

  socket.onclose = () => {

    console.log(
      "WebSocket Closed"
    );
  };
};

export const disconnectMarketSocket =
  () => {

    if (socket) {

      socket.close();
    }
  };