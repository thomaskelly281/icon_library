import { mdiWeightGram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeightGram(props: IconComponentProps) {
  return <Icon path={mdiWeightGram} {...props} />;
}

export { mdiWeightGram as path };
