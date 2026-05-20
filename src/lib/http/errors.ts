export class AppError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly statusCode = 400
  ) {
    super(message);
  }
}

export function toErrorResponse(error: unknown) {
  if (error instanceof AppError) {
    return Response.json(
      { ok: false, error: { code: error.code, message: error.message } },
      { status: error.statusCode }
    );
  }

  return Response.json(
    { ok: false, error: { code: "internal_error", message: "Unexpected error." } },
    { status: 500 }
  );
}
