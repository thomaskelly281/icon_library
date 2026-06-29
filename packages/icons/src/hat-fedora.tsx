import { mdiHatFedora } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HatFedora(props: IconComponentProps) {
  return <Icon path={mdiHatFedora} {...props} />;
}

export { mdiHatFedora as path };
