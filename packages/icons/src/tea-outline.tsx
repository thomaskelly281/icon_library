import { mdiTeaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TeaOutline(props: IconComponentProps) {
  return <Icon path={mdiTeaOutline} {...props} />;
}

export { mdiTeaOutline as path };
