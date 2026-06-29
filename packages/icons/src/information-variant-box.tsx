import { mdiInformationVariantBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationVariantBox(props: IconComponentProps) {
  return <Icon path={mdiInformationVariantBox} {...props} />;
}

export { mdiInformationVariantBox as path };
