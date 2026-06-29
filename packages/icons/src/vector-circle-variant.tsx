import { mdiVectorCircleVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorCircleVariant(props: IconComponentProps) {
  return <Icon path={mdiVectorCircleVariant} {...props} />;
}

export { mdiVectorCircleVariant as path };
