Admin.Router.map(function() {
  this.resource("apis", { path: "/apis" }, function() {
    this.route("new");
    this.route("edit", { path: "/:apiId/edit" });
  });

  this.resource("stats", { path: "/stats" }, function() {
    this.route("logs", { path: "/logs/:query" });
    this.route("logsDefault", { path: "/logs" });
    this.route("users");
    this.route("map");
  });
});

console.info(Admin.Router.router.recognizer);
