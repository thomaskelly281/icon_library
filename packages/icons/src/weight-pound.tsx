import { mdiWeightPound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeightPound(props: IconComponentProps) {
  return <Icon path={mdiWeightPound} {...props} />;
}

export { mdiWeightPound as path };
