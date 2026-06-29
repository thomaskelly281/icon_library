import { mdiProfessionalHexagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProfessionalHexagon(props: IconComponentProps) {
  return <Icon path={mdiProfessionalHexagon} {...props} />;
}

export { mdiProfessionalHexagon as path };
