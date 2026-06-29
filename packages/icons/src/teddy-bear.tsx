import { mdiTeddyBear } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TeddyBear(props: IconComponentProps) {
  return <Icon path={mdiTeddyBear} {...props} />;
}

export { mdiTeddyBear as path };
