import { mdiInformationVariantCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationVariantCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiInformationVariantCircleOutline} {...props} />;
}

export { mdiInformationVariantCircleOutline as path };
