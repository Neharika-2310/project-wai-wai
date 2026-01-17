from __future__ import annotations

from flask import Flask, jsonify


def create_app() -> Flask:
    app = Flask(__name__)

    @app.get("/health")
    def health() -> tuple[str, int]:
        return jsonify(status="ok"), 200

    @app.get("/")
    def root() -> tuple[str, int]:
        return jsonify(message="Hello from Flask"), 200

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="127.0.0.1", port=5000, debug=True)
