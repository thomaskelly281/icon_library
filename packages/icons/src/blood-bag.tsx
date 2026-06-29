import { mdiBloodBag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BloodBag(props: IconComponentProps) {
  return <Icon path={mdiBloodBag} {...props} />;
}

export { mdiBloodBag as path };
