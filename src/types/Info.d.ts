type Translation = {
  id: number;
  traduccion: string;
  idioma: string;
};

type Information = {
  id: number;
  information: string;
  videoUrl: string;
  imageName: string;
  traduccion: Translation[];
};
