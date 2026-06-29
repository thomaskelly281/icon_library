import { mdiNaturePeople } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NaturePeople(props: IconComponentProps) {
  return <Icon path={mdiNaturePeople} {...props} />;
}

export { mdiNaturePeople as path };
