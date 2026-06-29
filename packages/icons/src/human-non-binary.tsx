import { mdiHumanNonBinary } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanNonBinary(props: IconComponentProps) {
  return <Icon path={mdiHumanNonBinary} {...props} />;
}

export { mdiHumanNonBinary as path };
