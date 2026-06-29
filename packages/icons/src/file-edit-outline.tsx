import { mdiFileEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileEditOutline(props: IconComponentProps) {
  return <Icon path={mdiFileEditOutline} {...props} />;
}

export { mdiFileEditOutline as path };
