import { mdiMathIntegralBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathIntegralBox(props: IconComponentProps) {
  return <Icon path={mdiMathIntegralBox} {...props} />;
}

export { mdiMathIntegralBox as path };
