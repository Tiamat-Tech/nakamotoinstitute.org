FROM python:3.12-slim

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.4 /uv /bin/uv

# Copy the application into the container.
COPY . /app

# Install the application dependencies.
WORKDIR /app
RUN uv sync --no-cache

COPY ./compose/local/fastapi/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

ENV PATH="/app/.venv/bin:$PATH"

EXPOSE 8000

CMD ["/entrypoint"]
