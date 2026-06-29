import { mdiDeleteForeverOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteForeverOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteForeverOutline} {...props} />;
}

export { mdiDeleteForeverOutline as path };
