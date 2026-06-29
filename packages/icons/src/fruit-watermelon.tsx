import { mdiFruitWatermelon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FruitWatermelon(props: IconComponentProps) {
  return <Icon path={mdiFruitWatermelon} {...props} />;
}

export { mdiFruitWatermelon as path };
