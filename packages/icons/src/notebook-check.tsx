import { mdiNotebookCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookCheck(props: IconComponentProps) {
  return <Icon path={mdiNotebookCheck} {...props} />;
}

export { mdiNotebookCheck as path };
