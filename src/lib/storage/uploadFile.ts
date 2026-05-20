type UploadFileInput = {
  fileName: string;
  contentType: string;
  size: number;
};

export async function uploadFile(input: UploadFileInput) {
  return {
    url: `https://storage.example.com/${input.fileName}`,
    ...input
  };
}
