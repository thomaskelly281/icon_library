import { mdiLandFields } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandFields(props: IconComponentProps) {
  return <Icon path={mdiLandFields} {...props} />;
}

export { mdiLandFields as path };
