import { mdiInformationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationOutline(props: IconComponentProps) {
  return <Icon path={mdiInformationOutline} {...props} />;
}

export { mdiInformationOutline as path };
