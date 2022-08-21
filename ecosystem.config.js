module.exports = {
  apps: [
    {
      name: "my node app",
      script: "./app.js"
    },
    {
      name: "my python app",
      script: "./test.py",
      interpreter: "/usr/bin/python3.8",
      max_memory_restart: "200M",
      restart_delay: "5000",
      args: "development 8080"
    }
  ]
}
