import { mdiSonyPlaystation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SonyPlaystation(props: IconComponentProps) {
  return <Icon path={mdiSonyPlaystation} {...props} />;
}

export { mdiSonyPlaystation as path };
