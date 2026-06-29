import { mdiWeightKilogram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WeightKilogram(props: IconComponentProps) {
  return <Icon path={mdiWeightKilogram} {...props} />;
}

export { mdiWeightKilogram as path };
