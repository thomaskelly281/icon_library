import { mdiCreationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreationOutline(props: IconComponentProps) {
  return <Icon path={mdiCreationOutline} {...props} />;
}

export { mdiCreationOutline as path };
