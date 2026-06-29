import { mdiInformationVariantCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationVariantCircle(props: IconComponentProps) {
  return <Icon path={mdiInformationVariantCircle} {...props} />;
}

export { mdiInformationVariantCircle as path };
