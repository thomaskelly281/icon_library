import { mdiZodiacSagittarius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacSagittarius(props: IconComponentProps) {
  return <Icon path={mdiZodiacSagittarius} {...props} />;
}

export { mdiZodiacSagittarius as path };
