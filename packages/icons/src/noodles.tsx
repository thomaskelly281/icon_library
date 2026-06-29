import { mdiNoodles } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Noodles(props: IconComponentProps) {
  return <Icon path={mdiNoodles} {...props} />;
}

export { mdiNoodles as path };
