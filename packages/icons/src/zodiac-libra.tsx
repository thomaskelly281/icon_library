import { mdiZodiacLibra } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacLibra(props: IconComponentProps) {
  return <Icon path={mdiZodiacLibra} {...props} />;
}

export { mdiZodiacLibra as path };
