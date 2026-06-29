import { mdiInformationVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationVariant(props: IconComponentProps) {
  return <Icon path={mdiInformationVariant} {...props} />;
}

export { mdiInformationVariant as path };
