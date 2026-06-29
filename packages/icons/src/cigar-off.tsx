import { mdiCigarOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CigarOff(props: IconComponentProps) {
  return <Icon path={mdiCigarOff} {...props} />;
}

export { mdiCigarOff as path };
