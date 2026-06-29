import { mdiGenderNonBinary } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GenderNonBinary(props: IconComponentProps) {
  return <Icon path={mdiGenderNonBinary} {...props} />;
}

export { mdiGenderNonBinary as path };
