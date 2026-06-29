import { mdiSeed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Seed(props: IconComponentProps) {
  return <Icon path={mdiSeed} {...props} />;
}

export { mdiSeed as path };
