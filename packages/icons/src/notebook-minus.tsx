import { mdiNotebookMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookMinus(props: IconComponentProps) {
  return <Icon path={mdiNotebookMinus} {...props} />;
}

export { mdiNotebookMinus as path };
