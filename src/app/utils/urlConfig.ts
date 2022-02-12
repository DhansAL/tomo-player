// export const api = "https://tomoplayer-backend.herokuapp.com/api";
export const api = "http://localhost:4000/api";

export const generatePublicUrl = (filename: string) => {
  return `http://localhost:4000/public/${filename}`;
};
