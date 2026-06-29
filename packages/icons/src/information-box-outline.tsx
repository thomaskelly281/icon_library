import { mdiInformationBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiInformationBoxOutline} {...props} />;
}

export { mdiInformationBoxOutline as path };
