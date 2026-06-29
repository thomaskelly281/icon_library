import { mdiNotebookCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookCheckOutline} {...props} />;
}

export { mdiNotebookCheckOutline as path };
