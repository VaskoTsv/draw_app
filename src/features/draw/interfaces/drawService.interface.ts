interface IDrawService {
  startDrawing: ({ nativeEvent }: React.MouseEvent) => void;
  finishDrawing?: () => void;
  draw?: ({ nativeEvent }: React.MouseEvent) => void;
}

export default IDrawService;
