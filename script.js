const start = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: {
      mediaSource: "screen",
    },
  });
  const data = [];
  const Recorder = new MediaRecorder(stream);
  Recorder.ondataavailable = (e) => {
    data.push(e.data);
  };
  Recorder.start();
  Recorder.onstop = (e) => {
    document.querySelector("video").src = URL.createObjectURL(
      new Blob(data, {
        type: data[0].type,
      })
    );
  };
};

start();

