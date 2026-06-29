import { mdiSilverwareClean } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SilverwareClean(props: IconComponentProps) {
  return <Icon path={mdiSilverwareClean} {...props} />;
}

export { mdiSilverwareClean as path };
