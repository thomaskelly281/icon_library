import { mdiDonkey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Donkey(props: IconComponentProps) {
  return <Icon path={mdiDonkey} {...props} />;
}

export { mdiDonkey as path };
