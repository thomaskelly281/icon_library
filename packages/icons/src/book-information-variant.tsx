import { mdiBookInformationVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookInformationVariant(props: IconComponentProps) {
  return <Icon path={mdiBookInformationVariant} {...props} />;
}

export { mdiBookInformationVariant as path };
