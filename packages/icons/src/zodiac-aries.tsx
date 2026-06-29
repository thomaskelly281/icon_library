import { mdiZodiacAries } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacAries(props: IconComponentProps) {
  return <Icon path={mdiZodiacAries} {...props} />;
}

export { mdiZodiacAries as path };
