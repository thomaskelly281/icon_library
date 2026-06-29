import { mdiNotebookMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookMinusOutline} {...props} />;
}

export { mdiNotebookMinusOutline as path };
