import { mdiInformationOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationOffOutline(props: IconComponentProps) {
  return <Icon path={mdiInformationOffOutline} {...props} />;
}

export { mdiInformationOffOutline as path };
