import { mdiNotePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiNotePlusOutline} {...props} />;
}

export { mdiNotePlusOutline as path };
