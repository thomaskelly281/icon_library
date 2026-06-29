import { mdiNotebookHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookHeart(props: IconComponentProps) {
  return <Icon path={mdiNotebookHeart} {...props} />;
}

export { mdiNotebookHeart as path };
