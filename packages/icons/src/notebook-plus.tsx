import { mdiNotebookPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookPlus(props: IconComponentProps) {
  return <Icon path={mdiNotebookPlus} {...props} />;
}

export { mdiNotebookPlus as path };
